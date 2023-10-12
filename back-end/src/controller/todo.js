exports.getTodos = async (req, res) => {
    try {
        // const todo = await Todo.find();
        const todo = [
            {
                "id": 1,
                "title": "lunch",
                "description": "Go for lunc by 2pm"
            },
            {
                "id": 2,
                "title": "dinner",
                "description": "Go for dinner by 9pm"
            }
        ];
        res.status(200).json(todo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}