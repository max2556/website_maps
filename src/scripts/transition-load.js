console.log('Hello from transition-load script!');


export function display_on_load(e) {
    const time = 500; //in milliseconds. Must be equal to loaded transition property
    const selector = 'on-load-appear';
    const class_name = 'loaded';
    const objects = document.querySelectorAll('.' + selector);
    if (!objects) return;
    for (let obj of objects) {
        obj.classList.replace(selector, class_name);
    }



    setTimeout(delete_loaded_flag.bind(this, objects, class_name), time);
    function delete_loaded_flag(objects, class_name) {
        for (let obj of objects) {
            obj.classList.remove(class_name);
        }
    }
}

export function element_chain_load(e) {
    const time = 500;
    const class_name = 'chain-load';
    const loaded_class = 'loaded';

    const object = document.querySelector('.' + class_name);
    if (!object) return;
    const object_child_list = object.children;
    if (!object_child_list) return;

    object.classList.replace(class_name, loaded_class);
    for (let child of object_child_list) {
        child.classList.add(class_name);
    }

    setTimeout(chain_through_children.bind(this, object_child_list, 0), time);
    function chain_through_children(child_array, i) {
        const class_name = 'chain-load';
        const loaded_class = 'loaded';

        if (i < child_array.length) {
            child_array[i].classList.replace(class_name, loaded_class);
            let i_new = i + 1;
            setTimeout(chain_through_children.bind(this, child_array, i_new), time);
        }
    }
}

