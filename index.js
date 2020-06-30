//Задание 1
// Создать массив из 10 случайных чисел и написать несколько функций для работы с ним.
const array = [];
for (let i = 0; i < 10; ++i) {
    array.push(Math.ceil(Math.random() * 10));
}
console.log(array);

// Функция принимает массив и выводит его на экран.
/**
 *
 * @param {[]} arr
 */
function outputArray(arr) {
    let res = '';
    for (let i = 0; i < arr.length; ++i) {
        res += arr[i] + ' ';
    }
    alert(res);
}

outputArray(array);

// Функция принимает массив и выводит только четные элементы.
/**
 *
 * @param {[]} arr
 */
function outputEvenArrayItems(arr) {
    let res = '';
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] % 2 === 0) {
            res += arr[i] + ' ';
        }
    }
    alert(res);
}

outputEvenArrayItems(array);

// Функция принимает массив и возвращает сумму всех элементов массива.
/**
 *
 * @param {[]} arr
 * @returns {number}
 */
function returnArrayItemsSum(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; ++i) {
        res += arr[i];
    }
    return res;
}

alert(returnArrayItemsSum(array));

// Функция принимает массив и возвращает его максимальный элемент.
/**
 *
 * @param {[]} arr
 * @returns {*}
 */
function returnMaxArrayItem(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

alert(returnMaxArrayItem(array));

// Функция добавления нового элемента в массив по указанному индексу.
/**
 *
 * @param {[]} arr
 * @param {number} index
 * @returns {*}
 */
function addNewArrayItemByIndex(arr, index) {
    arr.splice(index, 0, Math.ceil(Math.random() * 10));
    return arr;
}

outputArray(addNewArrayItemByIndex(array, 0));

// Функция удаления элемента из массива по указанному индексу.
/**
 *
 * @param {[]} arr
 * @param {number} index
 * @returns {*}
 */
function deleteArrayItemByIndex(arr, index) {
    arr.splice(index, 1);
    return arr;
}

outputArray(deleteArrayItemByIndex(array, array.length-1));


//Задание 2
// Создать еще один массив из 5 случайных чисел и написать следующие функции.
const array2 = [];
for (let i = 0; i < 5; ++i) {
    array2.push(Math.ceil(Math.random() * 10));
}
console.log(array2);

// Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из двух массивов без повторений.
/**
 *
 * @param {[]} arr1
 * @param {[]} arr2
 * @returns {[]}
 */
function returnNewArrayWithoutRepeatItems(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    let arr4 = [];
    for (let i = 0; i < arr3.length; ++i) {
        if (!arr4.includes(arr3[i])) {
            arr4.push(arr3[i]);
        }
    }
    return arr4;
}

outputArray(returnNewArrayWithoutRepeatItems(array, array2));

// Функция принимает 2 массива и возвращает новый массив, в котором собраны общие элементы (то есть элементы, которые встречаются и в первом и во втором массивах) без повторений.
/**
 *
 * @param {[]} arr1
 * @param {[]} arr2
 * @returns {[]}
 */
function returnNewArrayCommonElementsWithoutRepeatItems(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr2.length; ++i) {
        if (arr1.includes(arr2[i]) && !arr3.includes(arr2[i])) {
            arr3.push(arr2[i]);
        }
    }
    return arr3;
}

outputArray(returnNewArrayCommonElementsWithoutRepeatItems(array, array2));

// Функция принимает 2 массива и возвращает новый массив, в котором собраны все элементы из первого массива, которых нет во втором массиве.
/**
 *
 * @param {[]} arr1
 * @param {[]} arr2
 * @returns {[]}
 */
function returnNewArrayDifferentElementsFromFirstArray(arr1, arr2) {
    let arr3 = [];
    for (let i = 0; i < arr1.length; ++i) {
        if (!arr2.includes(arr1[i]) && !arr3.includes(arr1[i])) {
            arr3.push(arr1[i]);
        }
    }
    return arr3;
}

outputArray(returnNewArrayDifferentElementsFromFirstArray(array, array2));
