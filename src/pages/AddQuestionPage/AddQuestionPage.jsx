import { Button } from "../../components/Button";
import cls from "./AddQuestionPage.module.css";

export const AddQuestionPage = () => {
  return (
    <>
      <h1 className={cls.formTitle}>Add new question</h1>
      <div className={cls.formContainer}>
        <form action="" className={cls.form}>
          <div className={cls.formControl}>
            <label htmlFor="questionField">Question: </label>
            <textarea
              defaultValue={"defaultValue"}
              name="question"
              id="questionField"
              cols="30"
              rows="2"
              required
              placeholder="пожалуйста введите вопрос"
            ></textarea>
          </div>
          <div className={cls.formControl}>
            <label htmlFor="answerField">Short Answer: </label>
            <textarea
              defaultValue={"defaultValue"}
              name="answer"
              id="answerField"
              cols="30"
              rows="2"
              required
              placeholder="пожалуйста введите короткий ответ"
            ></textarea>
          </div>
          <div className={cls.formControl}>
            <label htmlFor="answerField">Description: </label>
            <textarea
              defaultValue={"defaultValue"}
              name="description"
              id="descriptionField"
              cols="30"
              rows="5"
              required
              placeholder="пожалуйста введите полный ответ"
            ></textarea>
          </div>
          <div className={cls.formControl}>
            <label htmlFor="answerField">Resources: </label>
            <textarea
              defaultValue={"defaultValue"}
              name="resources"
              id="recourcesField"
              cols="30"
              rows="2"
              required
              placeholder="пожалуйста введите ресурсы, разделенные запятой"
            ></textarea>
          </div>
          <div className={cls.formControl}>
            <label htmlFor="levelField">Level: </label>
            <select name="level" id="levelField">
              <option disabled>QuestionLevel</option>
              <hr />
              <option value="1">1 - самый легкий</option>
              <option value="2">2 - средний</option>
              <option value="3">3 - самый сложный</option>
            </select>
          </div>

          <label htmlFor="cleaFormField" className={cls.clearFormControl}>
            <input className={cls.checkbox} type="checkbox" name="clearForm" id="clearFormField" defaultValue={true} />
            <span>clear form after submitting?</span>
          </label>
          <Button>Add question</Button>
        </form>
      </div>
    </>
  );
};
