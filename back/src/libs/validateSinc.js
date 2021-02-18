exports.validate = (model) => {
    let error = model.validateSync();
    if (error) {
        let status = []
        for (const key in error.errors) {
            let message = error.errors[key].message
            let res = {
                field: error.errors[key].path,
                reason: message.toString().replace(/\\|"/gi, "")
            };
            status.push(res);
        }

        return status
    } else {
        return false
    }
}
