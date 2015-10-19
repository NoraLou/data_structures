#QUESTION 19
instack = []
outstack = []
def enqueue(value):
  instack.append(value)

def dequeue():
  if len(outstack) == 0:
    while len(instack) != 0:
      outstack.append(instack.pop())
  return outstack.pop()





