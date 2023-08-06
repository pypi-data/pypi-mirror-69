## Installation
``` pip3 install gaussian_binomial_distributions ```

## Usage
```python
    from gaussian_binomial_distributions import Gaussian, Binomial

    # create object
    gaus_obj= Gaussian()

    # make text file, The txt file should have one number (float) per line. 
    gaus_obj.read_data_file('data_set.txt')

    # calc mean
    print(gaus_obj.calculate_mean())
    
    # calc standard deviation if the data is sample data
    print(gaus_obj.calculate_stdev())

    # calc standard deviation if the data is population data
    print(gaus_obj.calculate_stdev(False))
    
    #Probability density function calculator for the gaussian distribution.
    print(gaus_obj.pdf(33))

    # Dsplay Chart
    gaus_obj.plot_histogram()
```