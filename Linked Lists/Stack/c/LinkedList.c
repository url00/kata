#include <stdio.h>
#include <stdlib.h>
#include "LinkedList.h"


int LinkedList_init(Node** linkedList) {
    *linkedList = (Node*)malloc(sizeof(Node));
    if (*linkedList == NULL) {
        free(*linkedList);
        return 1;
    }

    (*linkedList)->next = NULL;
    (*linkedList)->data = NULL;

    return 0;
}

int LinkedList_addToStart(Node** linkedList, void* data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    if (newNode == NULL) {
        free(newNode);
        return 1;
    }
    newNode->next = *linkedList;
    newNode->data = data;
    *linkedList = newNode;

    return 0;
}

static int LinkedList_findNode(Node* linkedList, Node** foundNode, int index) {
    Node* currentNode = linkedList;
    int currentNodeIndex = 0;
    while (currentNode->next != NULL && currentNodeIndex != index) {
        currentNode = currentNode->next;
        currentNodeIndex++;
    }

    if (currentNodeIndex == index) {
        *foundNode = currentNode;
        return 0;
    } else {
        return 1;
    }
}

int LinkedList_insertBefore(Node** linkedList, void* data, int index) {
    int err = 0;

    Node* newNode = (Node*)malloc(sizeof(Node));
    if (newNode == NULL) {
        free(newNode);
        return 1;
    }
    newNode->data = data;


    if (index == 0) {
        newNode->next = *linkedList;
        *linkedList = newNode;
    } else {
        Node* nodeBefore;
        if((err = LinkedList_findNode(*linkedList, &nodeBefore, index - 1)))
            return err;

        Node* nodeAfter = nodeBefore->next;
        nodeBefore->next = newNode;
        newNode->next = nodeAfter;
    }

    return err;
}

void LinkedList_toString(Node* linkedList) {
    Node* current = linkedList;
    int index = 0;
    while (current->next != NULL) {
        int* dataPointer = (int*)current->data;
        int data = *dataPointer;

        printf("[%d]=%d ", index, data);

        current = current->next;
        index++;
    }
    printf("\n");
}

void LinkedList_free(Node** linkedList) {
    Node* current = *linkedList;
    while (current->next != NULL) {
        free(current->data);
        current->data = NULL;

        Node* oldCurrent = current;
        current = current->next;
        free(oldCurrent);
    }

    free(current);
    *linkedList = NULL;
}
