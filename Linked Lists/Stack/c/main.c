#include <stdio.h>
#include <stdlib.h>



typedef struct Node {
    // Needs to be struct Node* because the typedef hasn't happened yet.
    struct Node* next;
    void* data;
} Node;

int initializeLinkedList(Node** linkedList) {
    *linkedList = (Node*)malloc(sizeof(Node));
    if (*linkedList == NULL) {
        free(*linkedList);
        *linkedList = NULL;
        return 1;
    }

    (*linkedList)->next = NULL;
    (*linkedList)->data = NULL;

    return 0;
}

int addToStart(Node** linkedList, int data) {
    Node* newNode = (Node*)malloc(sizeof(Node));
    if (newNode == NULL) {
        free(newNode);
        newNode = NULL;
        return 1;
    }

    int* pointerToData = (int*)malloc(sizeof(int));
    if (pointerToData == NULL) {
        free(pointerToData);
        pointerToData = NULL;
        return 1;
    }
    *pointerToData = data;
    newNode->data = pointerToData;

    Node* oldHead = *linkedList;
    newNode->next = oldHead;
    *linkedList = newNode;

    return 0;
}

void printLinkedList(Node* linkedList) {
    Node* current = linkedList;
    while (current->next != NULL) {
        int* dataPointer = (int*)current->data;
        int data = *dataPointer;

        printf("%d ", data);

        current = current->next;
    }
}

int main(void) {
    int err = 0;

    Node* ll;

    err = initializeLinkedList(&ll);
    if (err) return err;

    err = addToStart(&ll, 200);
    if (err) return err;

    err = addToStart(&ll, -50);
    if (err) return err;

    err = addToStart(&ll, 300);
    if (err) return err;

    printLinkedList(ll);

    return 0;
}
