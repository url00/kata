#include <stdio.h>
#include <stdlib.h>
#include "LinkedList.h"

int main(void) {
    int err = 0;

    Node* ll;

    err = LinkedList_init(&ll);
    if (err) return err;


    int* two = (int*)malloc(sizeof(int));
    *two = 2;
    if ((err = LinkedList_addToStart(&ll, two)))
        return err;

    int* negFive = (int*)malloc(sizeof(int));
    *negFive = -5;
    if ((err = LinkedList_addToStart(&ll, negFive)))
        return err;

    int* fifty = (int*)malloc(sizeof(int));
    *fifty = 50;
    if ((err = LinkedList_addToStart(&ll, fifty)))
        return err;

    LinkedList_print(ll);


    int* wowza = (int*)malloc(sizeof(int));
    *wowza = 1337;
    if ((err = LinkedList_insertBefore(&ll, wowza, 1)))
        return err;
    LinkedList_print(ll);


    void* pointerToDeletedData;
    if ((err = LinkedList_deleteAt(&ll, &pointerToDeletedData, 1)))
        return err;
    int* deletedData = (int*)malloc(sizeof(int));
    deletedData = (int*)pointerToDeletedData;
    printf("--> %d\n", *deletedData);
    free(deletedData);
    LinkedList_print(ll);


    LinkedList_free(&ll);
    return 0;
}
