import KeywordSelect from "@src/components/Form/Keywords/KeywordSelect";
import { Link } from "@src/types";
import { Editor } from "@tinymce/tinymce-react";
import React, { ChangeEventHandler } from "react";
// import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";

// export function Form() {
//   const {
//     register,
//     setValue,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<Link>();

//   const onSubmit: SubmitHandler<Link> = (data) => console.log(data);

//   return (
//     <form className="form" onSubmit={onSubmit}>
//       <label htmlFor="id">ID</label>
//       {/* <p id="id">{link.id}</p> */}
//       <p {...register("id")} />

//       <label htmlFor="title">Title</label>
//       <input className="input input--text" {...register("title")} />

//       <button
//         onClick={(e) => {
//           e.preventDefault();
//           navigator.clipboard.writeText(link.url);
//           toast.info("Copied url to clipboard");
//         }}
//         className="button-link url-label"
//       ></button>
//       <label htmlFor="url">
//         <p style={{ paddingRight: "4px" }}>URL </p>
//         <svg
//           className="clipboard"
//           viewBox="0 0 16 16"
//           version="1.1"
//           width="16"
//           height="16"
//           aria-hidden="true"
//         >
//           <path
//             fillRule="evenodd"
//             d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"
//           ></path>
//         </svg>
//       </label>
//       <input {...register("url")} type="url" className="input input--text" />

//       {/* {hasLink && (
//         <>
//           <label htmlFor="startTime">Start time</label>
//           <input
//             id="startTime"
//             name="startTime"
//             type="number"
//             value={link.start_time}
//             className="input input--text"
//             onChange={handleStartTimeChange}
//           />
//         </>
//       )} */}
//       <label htmlFor="start_time">Start time</label>
//       <input
//         type="number"
//         className="input input--text"
//         {...register("start_time")}
//       />

//       <label htmlFor="keywords">Keywords</label>
//       <div id="keywords" className="keywords">
//         {/* TODO: How to register? */}
//         <KeywordSelect selected={link.keywords} />
//       </div>

//       <label htmlFor="last-accessed">Last accessed</label>
//       <p id="last-accessed">{link.last_accessed}</p>
//       <label htmlFor="views">Views</label>
//       <p id="views">{link.views}</p>
//       <label htmlFor="notes" style={{ color: "white" }}>
//         Notes
//       </label>
//       <div className="text-editor">
//         <Editor
//           id="tiny-mce-editor"
//           apiKey={import.meta.env.VITE_TINY_MCE_API_KEY}
//           init={{
//             height: 400,
//             menubar: false,
//             plugins: [
//               "advlist autolink lists link image charmap print preview anchor",
//               "searchreplace visualblocks code fullscreen",
//               "insertdatetime media table paste code help wordcount",
//             ],
//             toolbar:
//               `undo redo | formatselect | bold italic ` +
//               `| bullist numlist outdent indent | removeformat | image ` +
//               `| alignleft aligncenter alignright | help |`,
//           }}
//           textareaName="notes"
//           value={link.notes || ""}
//           onEditorChange={handleEditorChange}
//         />
//       </div>

//       <button
//         id="submitButton"
//         type="submit"
//         name="submitButton"
//         className="submit-button"
//         // handleSubmit validates inputs before invoking onSubmit
//         onClick={handleSubmit(onSubmit)}
//       >
//         {/* {hasLink ? "Update" : "Add"} */}
//         Update
//       </button>
//     </form>
//   );
// }

interface FormProps {
  link: Link;
  hasLink: boolean;
  handleUrlChange: ChangeEventHandler<HTMLInputElement>;
  toast: typeof toast;
  handleStartTimeChange: ChangeEventHandler<HTMLInputElement>;
  handleEditorChange: (content: string) => void;
  updateLink: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
}

export function Form({
  link,
  hasLink,
  handleUrlChange,
  toast,
  handleStartTimeChange,
  handleEditorChange,
  updateLink,
}: FormProps) {
  return (
    <form className="form">
      {hasLink && (
        <>
          <label htmlFor="id">ID</label>
          <p id="id">{link.id}</p>
        </>
      )}
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        name="title"
        className="input input--text"
        value={link.title || ""}
        onChange={handleUrlChange}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          navigator.clipboard.writeText(link.url);
          toast.info("Copied url to clipboard");
        }}
        className="button-link url-label"
      ></button>
      <label htmlFor="url">
        <p style={{ paddingRight: "4px" }}>URL </p>
        <svg
          className="clipboard"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          height="16"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.75 1a.75.75 0 00-.75.75v3c0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75v-3a.75.75 0 00-.75-.75h-4.5zm.75 3V2.5h3V4h-3zm-2.874-.467a.75.75 0 00-.752-1.298A1.75 1.75 0 002 3.75v9.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0014 13.25v-9.5a1.75 1.75 0 00-.874-1.515.75.75 0 10-.752 1.298.25.25 0 01.126.217v9.5a.25.25 0 01-.25.25h-8.5a.25.25 0 01-.25-.25v-9.5a.25.25 0 01.126-.217z"
          ></path>
        </svg>
      </label>

      <input
        id="url"
        type="url"
        name="url"
        className="input input--text"
        value={link.url || ""}
        onChange={handleUrlChange}
      />
      {hasLink && (
        <>
          <label htmlFor="startTime">Start time</label>
          <input
            id="startTime"
            name="startTime"
            type="number"
            value={link.start_time}
            className="input input--text"
            onChange={handleStartTimeChange}
          />
        </>
      )}
      <label htmlFor="keywords">Keywords</label>
      <div id="keywords" className="keywords">
        <KeywordSelect selected={link.keywords} />
      </div>
      <label htmlFor="last-accessed">Last accessed</label>
      <p id="last-accessed">{link.last_accessed}</p>
      <label htmlFor="views">Views</label>
      <p id="views">{link.views}</p>
      <label htmlFor="notes" style={{ color: "white" }}>
        Notes
      </label>
      <div className="text-editor">
        <Editor
          id="tiny-mce-editor"
          apiKey={import.meta.env.VITE_TINY_MCE_API_KEY}
          init={{
            height: 400,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              `undo redo | formatselect | bold italic ` +
              `| bullist numlist outdent indent | removeformat | image ` +
              `| alignleft aligncenter alignright | help |`,
          }}
          textareaName="notes"
          value={link.notes || ""}
          onEditorChange={handleEditorChange}
        />
      </div>
      <button
        id="submitButton"
        type="submit"
        name="submitButton"
        className="submit-button"
        onClick={updateLink}
      >
        {hasLink ? "Update" : "Add"}
      </button>
    </form>
  );
}
