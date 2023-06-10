"use client";

import { sendRequestToBack } from "@/lib/api/sendEmail";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { z } from "zod";

const formSchema = z.object({
  to: z
    .string({
      required_error: "Email is Required",
    })
    .min(1, {
      message: "Email is Required!",
    })
    .email(),
  name: z
    .string({
      required_error: "Name is Required",
    })
    .min(5)
    .max(15),
});

type FormType = z.infer<typeof formSchema>;

function Homepage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (payload: FormType) => {
    toast
      .promise(sendRequestToBack(payload), {
        loading: "Sending ...",
        error: "Mail sending failed",
        success: "Successfully send to mail",
      })
      .then(() => reset())
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="h-screen bg-black text-zinc-200 flex justify-center ">
      <div className="max-w-xl w-[500px] border border-zinc-700 rounded-xl mt-20 h-fit ">
        <form onSubmit={handleSubmit(onSubmit)} className="p-5 space-y-3">
          <div className="space-y-2">
            <label htmlFor="to" className="mb-1 block text-sm">
              To
            </label>
            <input
              {...register("to")}
              placeholder="want to send which email ..?"
              className="border outline-none block placeholder:text-sm w-full border-zinc-700 bg-transparent px-2 py-1 rounded "
            />
            <div className="text-rose-700">{errors.to?.message}</div>
          </div>
          <div className="space-y-2">
            <label htmlFor="to" className="block email-sm">
              Receipent Name
            </label>
            <input
              {...register("name")}
              placeholder="give me a receipent name.. ?"
              className="border outline-none block w-full border-zinc-700 bg-transparent px-2 py-1 placeholder:text-sm rounded "
            />

            <div className="text-rose-700">{errors.name?.message}</div>
          </div>

          <button
            type="submit"
            className="border border-zinc-600 px-3 py-1 rounded"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Homepage;
