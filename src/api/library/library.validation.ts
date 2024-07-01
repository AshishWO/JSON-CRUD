import * as yup from "yup";

//validation object for book
export const bookValidationSchema = yup
    .object()
    .shape({
        author: yup
            .string()
            .required("Author name is required.")
            .typeError("Author name must be a valid string"),
        title: yup
            .string()
            .required("Title is required.")
            .typeError("Title must be a valid string"),
        year: yup
            .number()
            .required("Year is required.")
            .test(
                "length",
                "please enter a valid year.",
                (val) => val.toString().length === 4
            )
            .typeError("Year must be a valid number"),
        id: yup.number(),
        type: yup
            .array()
            .min(1, "Book must belong to at least one type.")
            .required("Type is required.")
            .of(
                yup
                    .string()
                    .oneOf(
                        ["Adventure", "Horror", "Comic", "Nonfiction"],
                        "Invalid book type"
                    )
            )
            .typeError("Invalid type for the book"),
        readingStatus: yup
            .boolean()
            .required("Reading status is required.")
            .typeError("Reading status must be true or false."),
    })
    .noUnknown(true, (value) => {
        return `No extra properties allowed in book, found: ${value.unknown}`;
    })
    .strict();
