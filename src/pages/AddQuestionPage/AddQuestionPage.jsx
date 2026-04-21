import { useActionState } from "react";
import { Button } from "../../components/Button";
import cls from "./AddQuestionPage.module.css";
import { delayFn } from "../../helpers/delayFn";
import { toast } from "react-toastify";
import { API_URL } from "../../constants";

const createCardAction = async (_prevState, formData) => {
  try {
    await delayFn();
    const newQuestion = Object.fromEntries(formData);
    const resources = newQuestion.resources.trim();
    const isClearForm = newQuestion.clearForm;
    const response = await fetch(`${API_URL}/react`, {
      method: "POST",
      body: JSON.stringify({
        question: newQuestion.question,
        answer: newQuestion.answer,
        description: newQuestion.description,
        resources: resources.length ? resources.split(",") : [],
        level: Number(newQuestion.level),
        completed: false,
        editDate: undefined,
      }),
    });

    const question = response.json();
    toast.success("New question is succesfully created!");
    return isClearForm ? {} : question;
  } catch (error) {
    toast.error(error.message);
  }
};

export const AddQuestionPage = () => {
  const [formState, FormAction, isPending] = useActionState(createCardAction, { clearForm: true });
  console.log(formState);
  return (
    <>
      <h1 className={cls.formTitle}>Add new question</h1>
      <div className={cls.formContainer}>
        <form action={FormAction} className={cls.form}>
          <div className={cls.formControl}>
            <label htmlFor="questionField">Question: </label>
            <textarea
              defaultValue={formState.question}
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
              defaultValue={formState.answer}
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
              defaultValue={formState.description}
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
              defaultValue={formState.resources}
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
            <input
              className={cls.checkbox}
              type="checkbox"
              name="clearForm"
              id="clearFormField"
              defaultChecked={formState.clearForm}
            />
            <span>clear form after submitting?</span>
          </label>
          <Button>Add question</Button>
        </form>
      </div>
    </>
  );
};
