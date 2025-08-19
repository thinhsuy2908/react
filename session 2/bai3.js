const typeConsole = (type = "log") => {
    console[type](`đây là type: ${type}`);
};

typeConsole();