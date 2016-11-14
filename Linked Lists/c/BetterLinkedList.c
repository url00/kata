#include <stdio.h>
#include <stdlib.h>
#include "BetterLinkedList.h"


int BetterLinkedList_init(BetterLinkedList** ll) {
    *ll = (BetterLinkedList*)malloc(sizeof(BetterLinkedList));
    if (*ll == NULL) {
        return 1;
    }
    (*ll)->length = 0;
    (*ll)->head = NULL;
    (*ll)->addToStart = BetterLinkedList_addToStart;
    (*ll)->print = BetterLinkedList_print;

    return 0;
}

static int BetterLinkedList_addToStart(BetterLinkedList* ll, void* data) {
    BetterNode* newNode = (BetterNode*)malloc(sizeof(BetterNode));
    if (newNode == NULL) {
        free(newNode);
        return 1;
    }
    newNode->data = data;
    newNode->next = ll->head;
    ll->head = newNode;
    ll->length++;

    return 0;
}

static void BetterLinkedList_print(BetterLinkedList* ll) {
    BetterNode* current = ll->head;
    int index = 0;
    while (current != NULL) {
        int* dataPointer = (int*)current->data;
        int data = *dataPointer;

        printf("[%d]=%d ", index, data);

        current = current->next;
        index++;
    }
    printf("\n");
}

/*
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

void LinkedList_print(Node* linkedList) {
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


int LinkedList_deleteAt(Node** linkedList, void** resultData, int index) {
    int err = 0;

    Node* nodeToDelete;

    if (index == 0) {
        nodeToDelete = *linkedList;
        Node* newHead = nodeToDelete->next;
        *linkedList = newHead;

    } else {
        Node* nodeBefore;
        if ((err = LinkedList_findNode(*linkedList, &nodeBefore, index - 1)))
            return err;
        nodeToDelete = nodeBefore->next;
        Node* nodeAfter = nodeToDelete->next;
        nodeBefore->next = nodeAfter;
    }

    nodeToDelete->next = NULL;
    *resultData = nodeToDelete->data;
    free(nodeToDelete);

    return 0;
}
*/
