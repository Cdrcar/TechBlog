// Function to be used in a Handlebars template to format dates for display
module.exports = {
    format_date: date => {
        return`${ new Date(date).getMonth() +1}/${ new Date(date).getDate()}/${new Date(date).getFullYear()}`
    }
};