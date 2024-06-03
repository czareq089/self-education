# Name,Math,Science,English
# Alice,85,90,88
# Bob,78,76,85
# Charlie,92,85,91
# Diana,79,83,77
# Edward,88,89,84

import pandas as pd
import matplotlib.pyplot as mpl

data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward'],
    'Math': [20, 78, 92, 79, 88],
    'Science': [90, 99, 85, 83, 89],
    'English': [88, 85, 52, 77, 84]
}

df = pd.DataFrame(data)

average_grades = df[['Math', 'Science', 'English']].mean()
max_grades = df[['Math', 'Science', 'English']].max()

mpl.figure(figsize=(8, 5))
average_grades.plot(kind='bar', color=['red', 'green', 'blue'])
mpl.xlabel('Subject')
mpl.ylabel('Average Grade')
mpl.title('Average Grade by Subject')
mpl.ylim(0, 100)
mpl.show()



print(average_grades)
print(max_grades)
print(df)