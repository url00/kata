#include <stdio.h>
#include <stdlib.h>
#include "LinkedList.h"
#include "Stack.h"

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

    LinkedList_print(ll);


    int* wowza = (int*)malloc(sizeof(int));
    *wowza = 1337;
    if ((err = LinkedList_insertBefore(&ll, wowza, 1)))
        return err;
    LinkedList_print(ll);


    void* pointerToDeletedData = NULL;
    int* deletedData = NULL;
    if ((err = LinkedList_deleteAt(&ll, &pointerToDeletedData, 1)))
        return err;
    deletedData = (int*)pointerToDeletedData;
    printf("--> %d\n", *deletedData);
    free(deletedData);
    deletedData = NULL;

    if ((err = LinkedList_deleteAt(&ll, &pointerToDeletedData, 0)))
        return err;
    deletedData = (int*)pointerToDeletedData;
    printf("--> %d\n", *deletedData);
    free(deletedData);
    deletedData = NULL;

    LinkedList_print(ll);


    int* eleven = (int*)malloc(sizeof(int));
    *eleven = 11;
    if ((err = Stack_push(&ll, eleven))) {
        return err;
    }
    LinkedList_print(ll);

    if((err = Stack_pop(&ll, &pointerToDeletedData))) {
        return err;
    }
    LinkedList_print(ll);


    LinkedList_free(&ll);
    return 0;
}
