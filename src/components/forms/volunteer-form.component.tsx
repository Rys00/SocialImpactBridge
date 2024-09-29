import { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectVolunteerData } from "../../store/register-form/register-form.selector";
import { setVolunteerData } from "../../store/register-form/register-form.slice";
import Button from "../button/button.component";
import Input from "../inputs/input.component";
import TextArea from "../inputs/textarea.component";
import styles from "./forms.module.scss";

const VolunteerForm = () => {
  const formFields = useAppSelector(selectVolunteerData);
  const { name, surname, birthDate, experience } = formFields;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    console.log(name, value);

    if (name.startsWith("eName")) {
      const id = parseInt(name.substring(5));
      dispatch(
        setVolunteerData({
          ...formFields,
          experience: experience
            .slice(0, id)
            .concat({ ...experience[id], name: value })
            .concat(...experience.slice(id + 1)),
        })
      );
    } else if (name.startsWith("date")) {
      const id = parseInt(name.substring(4));
      dispatch(
        setVolunteerData({
          ...formFields,
          experience: experience
            .slice(0, id)
            .concat([{ ...experience[id], date: value }])
            .concat(experience.slice(id + 1)),
        })
      );
    } else if (name.startsWith("responsibility")) {
      const id = parseInt(name.substring(14));
      dispatch(
        setVolunteerData({
          ...formFields,
          experience: experience
            .slice(0, id)
            .concat([{ ...experience[id], responsibility: value }])
            .concat(experience.slice(id + 1)),
        })
      );
    } else if (name.startsWith("description")) {
      const id = parseInt(name.substring(11));
      dispatch(
        setVolunteerData({
          ...formFields,
          experience: experience
            .slice(0, id)
            .concat([{ ...experience[id], description: value }])
            .concat(experience.slice(id + 1)),
        })
      );
    } else dispatch(setVolunteerData({ ...formFields, [name]: value }));
  };

  const clearEvents = () => {
    dispatch(setVolunteerData({ ...formFields, experience: [] }));
  };

  const addEvent = () => {
    dispatch(
      setVolunteerData({
        ...formFields,
        experience: [
          ...experience,
          { name: "", date: "", responsibilities: "", description: "" },
        ],
      })
    );
  };

  return (
    <form
      className={styles.form}
      onSubmit={() => {
        navigate("#");
      }}
    >
      <h1>Dane woluntariusza</h1>
      <Input
        label="Imię"
        name="name"
        onChange={handleChange}
        value={name}
        required
      />
      <Input
        label="Nazwisko"
        name="surname"
        onChange={handleChange}
        value={surname}
        required
      />
      <Input
        label="Data urodzenia"
        type="date"
        name="birthDate"
        onChange={handleChange}
        value={birthDate}
        required
      />
      <div className={styles.events}>
        {experience.map((event, id) => (
          <div key={id}>
            <div className={styles.horizontal}>
              <Input
                label="Nazwa wydarzenia"
                name={`eName${id}`}
                onChange={handleChange}
                value={event.name}
                required
              />
              <Input
                label="Data"
                type="date"
                name={`date${id}`}
                onChange={handleChange}
                value={event.date}
                required
              />
            </div>
            <Input
              label="Rola / Odpowiedzialności"
              name={`responsibility${id}`}
              onChange={handleChange}
              value={event.responsibility}
              required
            />
            <TextArea
              label="Opis"
              name={`description${id}`}
              onChange={handleChange}
              value={event.description}
            />
          </div>
        ))}
      </div>
      <div className={styles.horizontal}>
        <Button type="button" onClick={clearEvents}>
          Wyczyść wydarzenia
        </Button>
        <Button type="button" highlighted onClick={addEvent}>
          Dodaj wydarzenie
        </Button>
      </div>
    </form>
  );
};

export default VolunteerForm;
