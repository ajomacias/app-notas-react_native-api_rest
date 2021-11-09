import Tasks from '../models/tasks';

export const getTasks = async (req, res) => {
    const tasks = await Tasks.findAll();
    res.json(tasks);
}

export const getTask = async (req, res) => {
    const id = req.params.id;
    const task = await Tasks.findOne({
        where: {
            id_task: `${id}`,
        }
    })
    res.json(task);
}

export const getTasksCount = async (req, res) => {
    const count = await Tasks.count();
    res.json(count);
}

export const saveTask = async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const task = await Tasks.create({
        title_task: title,
        text_task: description,
    })
    res.json(task);
}

export const deleteTask = async (req, res) => {
    const id = req.params.id;
    await Tasks.destroy({
        where: { id_task: `${id}` },
    })
    res.sendStatus(204);
}

export const editTask = async (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const description = req.body.description;
    console.log("this is id!!!! "+ id)
    console.log("this is data to form!!!! " + req.body.title)
    const task = await Tasks.update({
        title_task: title,
        text_task:description,
    },{
        where: { id_task: `${id}`}
    })
    res.sendStatus(204);
}