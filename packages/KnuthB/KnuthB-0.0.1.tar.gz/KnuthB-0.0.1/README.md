# Knuth B Shuffle Algorithm
## Destructive, In-place Shuffle

Reverse Order Random Swap Backwards - a cache friendly inplace shuffle algorithm.

## Mac & Linux Installation
```sh
$ pip install KnuthB
```

Installation may require Cython, and modern C++ development environment (Clang or GCC).

## Shuffle Tests
### Base Case: Random.shuffle
```
>>> from random import py_shuffle
>>> a = [*range(10)]
>>> print(a)
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> py_shuffle(a)
>>> print(a)
[4, 3, 2, 0, 9, 7, 5, 6, 8, 1]
```
### Test Case: KnuthB.shuffle
```
>>> from KnuthB import shuffle as knuth
>>> a = [*range(10)]
>>> print(a)
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> knuth(a)
>>> print(a)
[9, 1, 7, 8, 3, 2, 4, 6, 5, 0]
```

## MonkeyScope Timer Tests
### Base Case: Random.shuffle()
```
>>> from MonkeyScope import timer
>>> from random import shuffle as py_shuffle
>>> a = [*range(10000)]
>>> a = [*range(10000)]
>>> timer(py_shuffle, a, cycles=1)
Typical Timing: 10205985 ± 0 ns
```
### Test Case: KnuthB.shuffle()
```
>>> from MonkeyScope import timer
>>> from KnuthB import shuffle as knuth
>>> a = [*range(10000)]
>>> timer(knuth, a, cycles=1)
Typical Timing: 679970 ± 0 ns
```

### Performance Results
```
Time to Shuffle 10,000 Items

- Random.shuffle: 10,205,985 ns (approx 10.2 milliseconds)
- KnuthB.shuffle:    679,970 ns (approx  0.7 milliseconds)

    * Lower is better
```
