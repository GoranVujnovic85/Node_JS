#include <stdio.h>
#include <stdlib.h>

int arrey[] = {3, 1, 8, 7, 20, 55, 88,12};

// Bubble sort algorithm
void sort(int* arrey, int n)
{
	int i, temp, j;

	for(i = 0; i < n-1; i++)
	{
		for(j = 0; j < n-i-1; j++)
		{
			if (arrey[j] > arrey[j+1])
			{
			    temp = arrey[j];
			    arrey[j] = arrey[j+1];
			    arrey[j+1] = temp;
			}
		}
	}

}

void main(void)
{
	int i;
	int n = sizeof(arrey)/sizeof(arrey[0]);

	printf("Original array: ");
	for (i = 0; i < n; i++)
	{
		printf("%d ", arrey[i]);
	}

	sort(arrey, n);

    printf("\n");
	printf("\nSorted array: ");
	for (i = 0; i < n; i++)
	{
		printf("%d ", arrey[i]);
	}

}