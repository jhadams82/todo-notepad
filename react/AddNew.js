const React = require('react')
const Axios = require('axios')

const AddNew = React.createClass({
    handleSubmit: function() {
        th = this
        var newToDo = this.refs.toDoInput.value;

        if (!(newToDo === "")) {
        // POST REQUEST
        Axios.post('https://fierce-wildwood-92925.herokuapp.com/list', {
            "item": newToDo
        })
            .then(function(result) {
                th.forceUpdate()
            })
        }

    },
    render() {
        return (
            <div className="container">
                <input ref="toDoInput" type="text" className="new-to-do new-item" placeholder="Add New To-Do Item" />
                <button className="new-to-do add-new" onClick={this.handleSubmit.bind(this)}>+</button>
            </div>
        )
    }
})

module.exports = AddNew