// Создание элемента заголовка (h1) и добавление текста к этому элементу
        const titleElement = document.createElement('h1');
        titleElement.append('Hello from it-incubator');
 
        // Добавление элемента заголовка в тело документа
        document.body.append(titleElement);
        
        // Создание выпадающего списка (select)
        const techSelectElement = document.createElement('select');
 
        // Создание первого варианта (option) для выпадающего списка
        const techSelectOption0Element = document.createElement('option');
        techSelectOption0Element.value = 1;
        techSelectOption0Element.append('JS'); // Добавление текста 'JS' к первому варианту
        techSelectElement.append(techSelectOption0Element); // Добавление первого варианта в выпадающий список
 