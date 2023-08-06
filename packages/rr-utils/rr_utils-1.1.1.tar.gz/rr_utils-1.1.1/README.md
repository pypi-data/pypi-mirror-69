# RR Utils for Python

## What is, the purpose of this project?
It is a set of useful classes, That I often reuse in my projects

## How to install:
TBD


## How to use it?
### How to use InlineClass
```python
config_dic =  {"aa": 123, 
               "bb": "abc", 
               "cc": {"a1": 1}
               }
config_obj = InlineClass(config_dic, deep=True)
print(config_obj.cc.a1)
```

### How to use ConsoleLogger
```python
def consolelogger_use_case():
    logger = ConsoleLogger()
    sys.stdout = logger
    print("This will go to console")

    logger.add_log_file_destination("log1.txt")
    print("This will go to console and file: log1.txt")
    logger.remove_last_destination()

    with logger.add_log_file_destination("log2.txt"):
        print("This will go to console and file: log2.txt")
```

### How to use Constraints
TBD

### How to use Version
```python
ver = Version("1.2.3")
print(ver)
print("Major version {}".format(ver.get_version()[0]))
```

### How to use StopWatch
```python
def stopwatch_use_case_1():
    from StopWatch.StopWatch import StopWatch
    obj = StopWatch(auto_start=False)
    with obj as timer:
        import time
        #some code
        time.sleep(0.2)
    print(obj.get_elapsed_time())
```

```python
def stopwatch_use_case_2():
    from StopWatch.StopWatch import StopWatch
    obj = StopWatch(auto_start=True)
    import time
    #some code
    time.sleep(0.2)
    print(obj.get_elapsed_time())
```

### How to use TimeLimitGenerator
```python
def timelimitgenerator_use_case():
    def func(counter, elapsed_total, elapsed_prev):
        import time
        print(f"Time elapsed: {elapsed_total}")
        time.sleep(0.2)
        return counter

    for item in TimeLimitGenerator(2, func): #will run for 2 secounds
        print(item)
```


## ToDo:
* create pip package


