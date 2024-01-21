Poblem A

    - Algorithm 1
    - Algorithm 2
    - Algorithm 3

Either to compare one algorithm with another algorithm or to evaluate the performance of a single algorithm, performance factors:

    - Time Complexity: amount of time taken by an algorithm to run as a function of the length of the input
    - Space Complexity: amount of memory taken by an algorithm to run as a function of the length of the input

Mathematical Notations: Asymptotic Notations

    - Big - 'O' (Oh) - Upper Bound
    - Big - 'Ω' (Omega) - Lower Bound
    - Big - 'Θ' (Theta) - Tight Bound (Upper and Lower Bound)

Situations:

    - Best Case: Lower Bound
    - Worst Case: Upper Bound
    - Average Case: Tight Bound

Example: Linear Search

case(first element): If the key = 1, comparisons = 1 => O(1) => Best Case (abbr: Order of 1)
case(middle element): If the key = 5, comparisons = 5 => O(n/2) => O(n) => Average Case
case(last element): If the key = 10, comparisons = 10 => O(n) => Worst Case
case(not found): If the key = 11, comparisons = 10 => O(n) => Worst Case

Example: 1

```js
    int a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < M; j++) {
        b = b + rand();
    }
```

Time complexity: O(N + M)

Options:

a. O(1)
b. O(logN)
c. O(N)
d. O(NlogN)
e. O(N^2)
f. O(N^3)
g. O(2^N)
h. O(N!)

Solution:

int a = 0, b = 0;
=> O(1) (declarations, initializations, assignments, conditionals are all constant time operations)

for (i = 0; i < N; i++) {
a = a + rand();
}

=> O(N) (N times the loop is executed)

number of executions = values of i
i = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ..., N-1 => N times

for (j = 0; j < M; j++) {
b = b + rand();
}

=> O(M) (M times the loop is executed)

number of executions = values of j
j = 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ..., M-1 => M times

Time complexity, T(N, M)
= 1 + N + M
= N + M [since 1 is a constant]
= O(N + M)

Example: 2

```js
    int a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
    }
    for (j = 0; j < N; j++) {
        b = b + rand();
    }
```

Total Time Complexity, T(N)
= 1 + N + N
= 1 + 2N
= 2N [since 1 is a constant]
= O(N)

Example: 3

```js
    int a = 0, b = 0;
    for (i = 0; i < N; i++) {
        a = a + rand();
        for (j = 0; j < N; j++) {
            b = b + rand();
        }
    }
```

Approach 1:

Total Time Complexity, T(N)
= 1 + N \* N
= 1 + N^2
= N^2 [since 1 is a constant]
= O(N^2)

Approach 2:

1. Make some assumptions for the value of N

N = 4
N = 5
N = 6

2. Find the number of executions for each value of N

N = 4

    i = 0; j = 0, 1, 2, 3 => 4 times
    i = 1; j = 0, 1, 2, 3 => 4 times
    i = 2; j = 0, 1, 2, 3 => 4 times
    i = 3; j = 0, 1, 2, 3 => 4 times

    total number of executions = 4 + 4 + 4 + 4 = 16

N = 5

    i = 0; j = 0, 1, 2, 3, 4 => 5 times
    i = 1; j = 0, 1, 2, 3, 4 => 5 times
    i = 2; j = 0, 1, 2, 3, 4 => 5 times
    i = 3; j = 0, 1, 2, 3, 4 => 5 times
    i = 4; j = 0, 1, 2, 3, 4 => 5 times

    total number of executions = 5 + 5 + 5 + 5 + 5 = 25

N = 6

    i = 0; j = 0, 1, 2, 3, 4, 5 => 6 times
    i = 1; j = 0, 1, 2, 3, 4, 5 => 6 times
    i = 2; j = 0, 1, 2, 3, 4, 5 => 6 times
    i = 3; j = 0, 1, 2, 3, 4, 5 => 6 times
    i = 4; j = 0, 1, 2, 3, 4, 5 => 6 times
    i = 5; j = 0, 1, 2, 3, 4, 5 => 6 times

    total number of executions = 6 + 6 + 6 + 6 + 6 + 6 = 36

3. Find the pattern between the value of N and the number of executions

N = 4, executions = 16
N = 5, executions = 25
N = 6, executions = 36

For a given value of N, the number of executions is N^2

4. Find the time complexity

Time complexity, T(N)
= 1 + N^2
= N^2 [since 1 is a constant]
= O(N^2)

Example: 4

```js
    int a = 0;
    for (i = 0; i < N; i++) {
        for (j = N; j > i; j--) {
            a = a + i + j;
        }
    }
```

1. Make some assumptions for the value of N

N = 4
N = 5
N = 6

2. Find the number of executions for each value of N

N = 4

    i = 0; j = 4, 3, 2, 1 => 4 times
    i = 1; j = 4, 3, 2 => 3 times
    i = 2; j = 4, 3 => 2 times
    i = 3; j = 4 => 1 time

    total number of executions = 4 + 3 + 2 + 1 = 10

N = 5

    i = 0; j = 5, 4, 3, 2, 1 => 5 times
    i = 1; j = 5, 4, 3, 2 => 4 times
    i = 2; j = 5, 4, 3 => 3 times
    i = 3; j = 5, 4 => 2 times
    i = 4; j = 5 => 1 time

    total number of executions = 5 + 4 + 3 + 2 + 1 = 15

N = 6

    i = 0; j = 6, 5, 4, 3, 2, 1 => 6 times
    i = 1; j = 6, 5, 4, 3, 2 => 5 times
    i = 2; j = 6, 5, 4, 3 => 4 times
    i = 3; j = 6, 5, 4 => 3 times
    i = 4; j = 6, 5 => 2 times
    i = 5; j = 6 => 1 time

    total number of executions = 6 + 5 + 4 + 3 + 2 + 1 = 21

3. Find the pattern between the value of N and the number of executions

N = 4, executions = 10
N = 5, executions = 15
N = 6, executions = 21

for a given value of N, the number of executions = sum of first N natural numbers

sum of first N natural numbers

S(N) = 1 + 2 + 3 + .....+ N-2 + N-1 + N
S(N) = N + N-1 + N-2 + .....+ 3 + 2 + 1
========================================

2 x S(N) = (N + 1) + (N + 1) + (N + 1) + .....+ (N + 1) + (N + 1) + (N + 1)
2 x S(N) = N x (N + 1)
S(N) = N x (N + 1) / 2

For a given value of N, the number of executions = N x (N + 1) / 2

4. Find the time complexity

Time complexity, T(N)
= 1 + N x (N + 1) / 2
= N x (N + 1) / 2 [since 1 is a constant]
= 1/2 [N^2 + N]
= N^2 + N [since 1/2 is a constant]
= O(N^2) [since N^2 is the dominant term]

Example: 5

```js
    int i, j, k = 0;
    for (i = n / 2; i <= n; i++) {
        for (j = 2; j <= n; j = j * 2) {
            k = k + n / 2;
        }
    }
```

Outer loop: i = n/2, n/2 + 1, n/2 + 2, n/2 + 3, ..., n = n/2 times

Inner Loop:

1. Make some assumptions for the value of N

N = 10
N = 29
N = 30
N = 31
N = 40

2. Find the number of executions for each value of N

N = 10; j = 2, 4, 8 => 3 times
N = 29; j = 2, 4, 8, 16 => 4 times
N = 30; j = 2, 4, 8, 16 => 4 times
N = 31; j = 2, 4, 8, 16 => 4 times
N = 40; j = 2, 4, 8, 16, 32 => 5 times

For a given value of N, the number of executions = log2(N)

Example 6:

Problem: Given an array of integers, find and print the different ways in which we can select elements from the array.

Example:

Input: [1, 2, 3]

Output:

0 => ()
1 => (1), (2), (3)
2 => (1, 2), (1, 3), (2, 3)
3 => (1, 2, 3)

Input: [1, 2, 3, 4]

Output:

0 => ()
1 => (1), (2), (3), (4)
2 => (1, 2), (1, 3), (1, 4), (2, 3), (2, 4), (3, 4)
3 => (1, 2, 3), (1, 2, 4), (1, 3, 4), (2, 3, 4)
4 => (1, 2, 3, 4)

For a given N = 3, the number of ways = 8
For a given N = 4, the number of ways = 16
For a given N = 5, the number of ways = 32

number of ways or executions (General form): 2^N

Time complexity, T(N) = O(2^N)

Example 7:

Problem: Given a string, find and print all the possible permutations of the string.

Example:

Input: "abc"

Output:

abc
acb
bac
bca
cab
cba

Input: "abcd"

Output:

abcd
abdc
acbd
acdb
adbc
adcb
bacd
badc
bcad
...
...

For a given N = 3, the number of ways = 6
For a given N = 4, the number of ways = 24
For a given N = 5, the number of ways = 120

number of ways or executions (General form): N!

Time complexity, T(N) = O(N!)
