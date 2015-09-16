def towers_of_hanoi(n,source,helper,target):
    if n > 0:
        # move tower of size n - 1 to helper:
        towers_of_hanoi(n - 1, source, target, helper)
        # move disk from source peg to target peg
        if source:
            target.append(source.pop())
        # move tower of size n-1 from helper to target
        towers_of_hanoi(n - 1, helper, source, target)

source = [4,3,2,1]
target = []
helper = []

#towers_of_hanoi(len(source),source,helper,target)



towers_of_hanoi(4, source, target, helper)
print "source", source, "helper", helper, "target",target
