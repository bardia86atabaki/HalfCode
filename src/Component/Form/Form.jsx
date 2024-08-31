function Form({ Notesetter, setNoteSetter }) {
  const submitHandler = async (e) => {
    await Notesetter({
      title: e.target.titel.value,
      des: target.des.value,
    });
    e.preventDefault();
  };
  return(
    <form 
    action=""
    className="flex flex-col justify-between bg-slate-950 w-80"
    onSubmit={() => submitHandler(event)}>
        <input type="text" placeholder="Add Your Note Title"
        name="titel" />
        <textarea name="des" id="">
            Add Your Description
        </textarea>
        <input type="submit" value="submit"
        className="bg-orange-500" />
    </form>
  )
}
export default Form;
