
High level overview:
1. gaussian_space
	1.1 Gauss.py
    1.2 Binomial.py
    1.3 Basedistribution.py
    1.4 __init__.py
    
	gauss.py contains the Gaussian class which has methods to calculate mean, standard deviation, probability
	density function, plot histogram, and most importantly it can add two gaussian distributions and returns 
	mean and standard deviation of the resultant distribution. 

	Binomial.py has Binomial class for calculating and visualizing a Binomial distribution.

	Basedistribution.py has the Distribution base class which is used to read data from a text file.

INPUT FILE FORMAT:
	There should be one numerical value in each row

USAGE:

from gaussian_space import Gaussian

gaussian_one = Gaussian(25, 3)
gaussian_two = Gaussian(30, 4)
gaussian_sum = gaussian_one + gaussian_two

print("mean {}, standard deviation {}".format(gaussian_sum.mean,gaussian_sum.stdev))

Similarly, one can also use the methods of the Binomial class as well. 



