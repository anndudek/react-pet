import { Button } from "../Button";
import cls from "./QuestionForm.module.css";

export const QuestionForm = ({ formAction, state, isPending, submitBtnText }) => {
  return (
    <form action={formAction} className={cls.form}>
      <div className={cls.formControl}>
        <label htmlFor="questionField">Question: </label>
        <textarea
          defaultValue={state.question}
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
          defaultValue={state.answer}
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
          defaultValue={state.description}
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
          defaultValue={state.resources}
          name="resources"
          id="recourcesField"
          cols="30"
          rows="2"
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
        <input className={cls.checkbox} type="checkbox" name="clearForm" id="clearFormField" defaultChecked={state.clearForm} />
        <span>clear form after submitting?</span>
      </label>
      <Button isDisabled={isPending}>{submitBtnText}</Button>
    </form>
  );
};
