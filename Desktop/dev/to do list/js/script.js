{
    
    const tasks = [
        {
            content: "nagrać lekcje",
            done: false,
        },
        {
            content: "zjeść pierogi",
            done: true,
        },
    ];
    
    const render = () => {

        let htmlString ="";
    
        for (const task of tasks) {
            htmlString += `
            <li>
            ${task.content}
            </li>
            `;
        }
}
    const init = () => {
        render();
    };

    init();
}