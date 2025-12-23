// Common texts used across the application
export const common = {
  actions: {
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    create: "Create",
    submit: "Submit",
    back: "Back",
    next: "Next",
    confirm: "Confirm",
    close: "Close",
  },
  messages: {
    loading: "Loading...",
    error: "Something went wrong",
    success: "Success!",
    noData: "No data available",
    confirmDelete: (item: string) => `Are you sure you want to delete ${item}?`,
  },
  validation: {
    required: "This field is required",
    invalidEmail: "Invalid email address",
    minLength: (min: number) => `Minimum length is ${min} characters`,
    maxLength: (max: number) => `Maximum length is ${max} characters`,
  },
} as const;
