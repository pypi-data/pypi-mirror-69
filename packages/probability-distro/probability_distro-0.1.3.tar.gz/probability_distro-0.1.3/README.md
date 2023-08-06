## This is a simple python package for calculating Gaussian and Binomial Distributions.

In this package there are two classes present:
1. Gaussian
2. Binomial

use `from probability_distro import Gaussian, Binomial`

Examples: 

``` python

# parameters are  mean and standard deviation.
first_gaussian = Gaussian(25,2) 
 
second_gaussian = Gaussian(30,3)

# add gaussians using + operator.
add_gaussians = first_gaussian + second_gaussian



"""
Methods: 

1.read_data_file()


		Function to read in data from a txt file. The txt file should have
		one number (float) per line. The numbers are stored in the data attribute.
				
		Args:
			file_name (string): name of a file to read from
		
		Returns:
			None
		
2. calculate_mean()

		Function to calculate the mean of the data set.
		
		Args: 
			None
		
		Returns: 
			float: mean of the data set
            
3.  calculate_stdev()

		Function to calculate the standard deviation of the data set.
		
		Args: 
			sample (bool): whether the data represents a sample or population
		
		Returns: 
			float: standard deviation of the data set


"""
  

```

For more methods please check the source code for this package.

 


