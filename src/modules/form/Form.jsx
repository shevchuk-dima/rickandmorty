import style from "../form/Form.css";
import { useState, useEffect } from "react";

function Form(props) {
  const { formActive, setFormActive, cards, setCard } = props;

  const [formValid, setFormValid] = useState(false);

  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  const [likes, setLikes] = useState(0);
  const [likesError, setLikesError] = useState("");

  const [views, setViews] = useState(0);
  const [viewsError, setViewsError] = useState("");

  const [dateCreate, setDateCreate] = useState("");
  const [dateCreateError, setDateCreateError] = useState("");

  const [author, setAuthor] = useState("none");
  const [authorError, setAuthorError] = useState("");

  const [agree, setAgree] = useState(false);
  const [agreeError, setAgreeError] = useState("");

  const [tags, setTags] = useState("");
  const [tagsError, setTagsError] = useState("");

  const [fav, setFav] = useState(false);
  const [favError, setFavError] = useState("");

  const [file, setFile] = useState("");

  useEffect(() => {
    if (
      (title ||
        likes ||
        views ||
        dateCreate ||
        author !== "none" ||
        agree ||
        tags ||
        fav) &&
      !titleError &&
      !likesError &&
      !viewsError &&
      !dateCreateError &&
      !authorError &&
      !agreeError &&
      !tagsError &&
      !favError
    ) {
      setFormValid(true);
    }
  }, [title, likes, views, dateCreate, author, agree, tags, fav]);

  useEffect(() => {
    if (
      title ||
      likes ||
      views ||
      dateCreate ||
      author !== "none" ||
      agree ||
      tags ||
      fav
    ) {
      if (
        !titleError &&
        !likesError &&
        !viewsError &&
        !dateCreateError &&
        !authorError &&
        !agreeError &&
        !tagsError &&
        !favError
      ) {
        setFormValid(true);
      } else {
        setFormValid(false);
      }
    }
  }, [
    titleError,
    likesError,
    viewsError,
    dateCreateError,
    authorError,
    agreeError,
    tagsError,
    favError,
  ]);

  function handleChange(e) {
    switch (e.target.name) {
      case "title": {
        setTitle(e.target.value);
        !e.target.value ? setTitleError("Пустое поле!") : setTitleError("");
        break;
      }
      case "likes": {
        setLikes(e.target.value);
        e.target.value < 0 || parseInt(e.target.value) === 0
          ? setLikesError("Не может быть меньше 0!")
          : setLikesError("");
        break;
      }
      case "views": {
        setViews(e.target.value);
        e.target.value < 0 || parseInt(e.target.value) === 0
          ? setViewsError("Не может быть меньше 0!")
          : setViewsError("");
        break;
      }
      case "date": {
        setDateCreate(e.target.value);
        !e.target.value
          ? setDateCreateError("Пустое поле!")
          : setDateCreateError("");
        break;
      }
      case "author": {
        setAuthor(e.target.value);
        e.target.value === "none"
          ? setAuthorError("Пустое поле!")
          : setAuthorError("");
        break;
      }
      case "agree": {
        setAgree(!agree);
        agree ? setAgreeError("Нужно согласие!") : setAgreeError("");
        break;
      }
      case "tags": {
        setTags(e.target.value);
        !e.target.value ? setTagsError("Пустое поле!") : setTagsError("");
        break;
      }
      case "fav": {
        setFav(e.target.value);
        e.target.value == "fav" || e.target.value == "notfav"
          ? setFavError("")
          : setFavError("Нужно выбрать!");
        break;
      }
      case "img": {
        setFile(e.target.value);
        break;
      }
    }
  }

  function submitForm(e) {
    e.preventDefault();
    !title ? setTitleError("Пустое поле!") : setTitleError("");
    parseInt(likes) < 0 || parseInt(likes) == 0
      ? setLikesError("Не может быть меньше 0!")
      : setLikesError("");
    parseInt(views) < 0 || parseInt(views) == 0
      ? setViewsError("Не может быть меньше 0!")
      : setViewsError("");
    !dateCreate ? setDateCreateError("Пустое поле!") : setDateCreateError("");
    author === "none" || !author
      ? setAuthorError("Пустое поле!")
      : setAuthorError("");
    !agree ? setAgreeError("Нужно согласие!") : setAgreeError("");
    !tags ? setTagsError("Пустое поле!") : setTagsError("");
    fav == "fav" || fav == "notfav"
      ? setFavError("")
      : setFavError("Нужно выбрать!");
    if (
      formValid &&
      title &&
      likes &&
      views &&
      dateCreate &&
      author !== "none" &&
      agree &&
      tags &&
      fav
    ) {
      let newCards = cards;
      let newCard = {
        id: cards.length + 1,
        title: title,
        author: author,
        tags: tags,
        likes: likes,
        views: views,
        fav: fav,
      };
      newCards.push(newCard);
      setCard(newCards);

      setTitle("");
      setLikes(0);
      setViews(0);
      setDateCreate("");
      setAuthor("none");
      setAgree(false);
      setTags("");
      setFav(false);
      setFormValid(false);
      setFormActive(false);
    }
  }

  return (
    <div
      className={
        formActive ? "form-wrapper form-wrapper-active" : "form-wrapper"
      }
      onClick={() => setFormActive(false)}
    >
      <form className="form" onClick={(e) => e.stopPropagation()}>
        <div className="form-field">
          <label htmlFor="title">Title:</label>
          <input
            name="title"
            style={{ borderColor: titleError ? "red" : "" }}
            id="title"
            type="text"
            value={title}
            onChange={(e) => handleChange(e)}
          />
          {titleError ? <p className="error-text">{titleError}</p> : ""}
        </div>
        <div className="form-field">
          <label htmlFor="likes">Likes count:</label>
          <input
            name="likes"
            style={{ borderColor: likesError ? "red" : "" }}
            id="likes"
            type="number"
            value={likes}
            onChange={(e) => handleChange(e)}
          />
          {likesError ? <p className="error-text">{likesError}</p> : ""}
        </div>
        <div className="form-field">
          <label htmlFor="views">Views count:</label>
          <input
            name="views"
            id="views"
            style={{ borderColor: viewsError ? "red" : "" }}
            type="number"
            value={views}
            onChange={(e) => handleChange(e)}
          />
          {viewsError ? <p className="error-text">{viewsError}</p> : ""}
        </div>
        <div className="form-field">
          <label htmlFor="date">Date create: </label>
          <input
            name="date"
            id="date"
            style={{ borderColor: dateCreateError ? "red" : "" }}
            type="date"
            value={dateCreate}
            onChange={(e) => handleChange(e)}
          />
          {dateCreateError ? (
            <p className="error-text">{dateCreateError}</p>
          ) : (
            ""
          )}
        </div>
        <div className="form-field">
          <label htmlFor="author">Автор:</label>
          <select
            name="author"
            style={{ borderColor: authorError ? "red" : "" }}
            id="author"
            value={author}
            onChange={(e) => handleChange(e)}
          >
            <option value="none">none</option>
            <option value="Dmitriy Shevchuk">Dmitriy Shevchuk</option>
            <option value="Dmitriy Paschuk">Dmitriy Paschuk</option>
            <option value="Valeriy Shevchuk">Valeriy Shevchuk</option>
          </select>
          {authorError ? <p className="error-text">{authorError}</p> : ""}
        </div>
        <div className="form-field">
          <label htmlFor="agree">Соглас(ен)(на) на обработку данных</label>
          <input
            name="agree"
            id="agree"
            style={{ borderColor: agreeError ? "red" : "" }}
            type="checkbox"
            checked={agree}
            onChange={(e) => handleChange(e)}
          />
          {agreeError ? <p className="error-text">{agreeError}</p> : ""}
        </div>
        <div className="form-field">
          <label htmlFor="tags">Теги:</label>
          <textarea
            name="tags"
            id="tags"
            style={{ borderColor: tagsError ? "red" : "" }}
            value={tags}
            onChange={(e) => handleChange(e)}
          />
          {tagsError ? <p className="error-text">{tagsError}</p> : ""}
        </div>
        <div className="form-field">
          <label htmlFor="fav">Favourite:</label>
          <p>
            <input
              name="fav"
              type="radio"
              id="fav"
              value="fav"
              checked={fav === "fav"}
              onChange={(e) => handleChange(e)}
            />
            Yes
          </p>
          <p>
            <input
              name="fav"
              type="radio"
              id="fav"
              value="notfav"
              checked={fav === "notfav"}
              onChange={(e) => handleChange(e)}
            />
            No
          </p>
          {favError ? <p className="error-text">{favError}</p> : ""}
        </div>
        <div className="form-field">
          <label htmlFor="img">Картинка:</label>
          <input name="img" type="file" id="img" />
        </div>
        <button disabled={!formValid} onClick={(e) => submitForm(e)}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
