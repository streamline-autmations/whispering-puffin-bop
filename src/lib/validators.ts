import { z } from "zod";

export const transactionSchema = z.object({
  type: z.enum(["income", "expense"], { required_error: "Please select a transaction type." }),
  amount: z.coerce.number().positive({ message: "Amount must be a positive number." }),
  currency: z.enum(["ZAR", "USD"]),
  date: z.date({ required_error: "A date is required." }),
  description: z.string().min(1, { message: "Description is required." }),
  category: z.string().min(1, { message: "Category is required." }),
  tagType: z.enum(["Personal", "Business", "Project"]),
  project: z.string().optional(),
}).refine(data => {
    if (data.tagType === 'Project') {
        return !!data.project && data.project.length > 0;
    }
    return true;
}, {
    message: "Project name is required when tag is 'Project'",
    path: ["project"],
});

export type TransactionFormValues = z.infer<typeof transactionSchema>;

export const budgetSchema = z.object({
    name: z.string().min(1, { message: "Project name is required." }),
    amount: z.coerce.number().positive({ message: "Budget amount must be a positive number." }),
});

export type BudgetFormValues = z.infer<typeof budgetSchema>;