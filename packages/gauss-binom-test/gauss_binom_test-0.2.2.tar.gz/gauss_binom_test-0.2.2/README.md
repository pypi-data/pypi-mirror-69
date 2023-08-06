# Gaussian and Binomial Distributions

A basic package for calculating and visualizing Gaussian and Binomial Distributions.
This is only a test.


# How to install

```console 
$ python install gauss-binom-test
```

# Features

- Calculate the Gaussian and Binomial pdf of a data set
- Calculate the mean and standard deviation
- Calculate the sum of two pdfs
- Plot the histogram of data points and normalizdd histogram of the pdf



# Example

Open the Python interpreter:

**Create a standard normalmdistribution (zero mean and standard deviation equal to one)**

```console
$ python
>>> gaussian_normal = Gaussian()
```

**Create a Gaussian distribution with mean=5 and stdv=2

```console
>>> gaussian_one = Gaussian(5,2)
```

**Addition of two Gaussian distributions**

```console
>>> gaussian_sum = gaussian_normal + gaussian_one
```

**Calculate the probability of a data point for a Gaussian distribution with a given mean and stdv**

```console
>>> gaussian_one = Gaussian(5,2)
>>> gaussian_one.pdf(6)
```

**Calculate the mean and standard deviation

```console
>>> gaussian_one.mean()
>>> # sample stdv
>>> gaussian_one.stdev() 
>>> # population stdev
>>> gaussian_one.stdev(sample=False)
```

