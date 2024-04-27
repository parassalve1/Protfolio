'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@nextui-org/react"
import { useForm } from "react-hook-form"
import { MdEmail, MdOutlineMarkEmailUnread } from "react-icons/md"
import { z } from "zod"

const formSchema = z.object({
    email:z.string().email('Enter a Valid email!!'),

    firstName:z.string()
                .min(2,'First Name must be less than 2 char!')
                .max(45,'FirstName must be Less than 45 char!!')
                .regex(new RegExp('^[a-zA-Z]+$'),'no spaicial char are Allowed in name!!'),

    lastName:z.string()
                .min(2,'Last Name must be less than 2 char!')
                .max(45,'Last Name must be Less than 45 char!!')
                .regex(new RegExp('^[a-zA-Z]+$'),'no spaicial char are Allowed in name!!'),
    
    company:z.string(),

    message:z.string()
            .min(15,'Minimum 15 char are required in Message box!!')
            .max(600,'Minimum 15 char are required in Message box!!')
                         
})

type InputType = z.infer<typeof formSchema>

export default function Contact() {
    const{register,handleSubmit, formState:{errors,isSubmitting}} = useForm<InputType>({
        resolver:zodResolver(formSchema)
    })
    
      return (
        <div className="h-screen grid place-items-center items-center w-full">

       <form className=" w-[50vw] flex justify-center items-center " >
        
           <Input {...register('email')}
           label={"Email"}
           type="text"
           variant="bordered"
           errorMessage={errors.email?.message}
           isInvalid={!!errors.email}
           color="danger"
           startContent={<MdOutlineMarkEmailUnread className="text-white" />}
           className="col-span-2"
           />
           <Input {...register('firstName')}
           label={"firstName"}
           type=""
           variant="bordered"
           errorMessage={errors.firstName?.message}
           isInvalid={!!errors.firstName}
           color="danger"
           startContent={<MdOutlineMarkEmailUnread className="text-white" />}
           className="col-span-2"
           />
           <Input {...register('lastName')}
           label={"lastName"}
           type="text"
           variant="bordered"
           errorMessage={errors.lastName?.message}
           isInvalid={!!errors.lastName}
           color="danger"
           startContent={<MdOutlineMarkEmailUnread className="text-white" />}
           className="col-span-2"
           />
           <Input {...register('message')}
           label={"message"}
           type="text"
           variant="bordered"
           errorMessage={errors.message?.message}
           isInvalid={!!errors.message}
           color="danger"
           startContent={<MdOutlineMarkEmailUnread className="text-white" />}
           className="col-span-2"
           />
       </form>
           </div>
      )
    }
    

