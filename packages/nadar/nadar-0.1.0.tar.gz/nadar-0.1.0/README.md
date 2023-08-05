# NAtural DAte Ranges

The purposed of this package is to translate natural language phrases describing date ranges into relevant dates or strings.

# Installation

`pip install nadar`

# How to use the package

`import nadar as nd`

**parse_reference**<br/>
Takes in a string representing a delta in date and returns it given the reference date.

```
>>> nd.parse_reference('today')
SmartDate(2020-05-18)

>>> parse_reference('hace tres meses')
SmartDate(2018, 2, 8)
```

**parse_period**<br/>
Takes in a string representing a period and returns it given the reference date.

```
>>> nd.parse_period('last month')
SmartPeriod(SmartDate(2018, 4, 1), SmartDate(2018, 4, 30))

>>> nd.parse_period('last year', reference='2017-10-28')
SmartPeriod(SmartDate(2016, 1, 1), SmartDate(2016, 12, 31))
```

**smart_dates**<br/>
Wrapper for both parse_period() and parse_reference() returning a tuple of strings.

```
>>> nd.smart_dates('4 months ago')
('2020-01-01', '2020-01-31')

>>> nd.smart_dates('yesterday')
('2020-05-19', '2020-05-19')
```

# Acknowledgment

The main author of the code for this package is [**Benjamin Wolter, PhD**](https://www.linkedin.com/in/benjamin-wolter/).<br/>
The author of the original idea for the functionality is [**Sergey Ivanov, PhD**](https://www.linkedin.com/in/sergey-ivanov-a52355bb/)
