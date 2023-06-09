import { Button } from "../../components/Button"
import { Container } from "../../components/Container"
import { Divider } from "../../components/Divider"
import { MyInput as Input } from "../../components/Input"
import { useForm, FormProvider } from "react-hook-form";
import mapeiaLogo from "../../assets/mapeiaLogo.png"
import { useNavigate } from "react-router-dom";

type LoginProps = {
   email: string
   password: string,
}

export const Login = () => {
   const methods = useForm<LoginProps>();
   const navigate = useNavigate()


   return (
      <Container>
         <FormProvider {...methods}>
            <form className="w-[700px] h-auto flex flex-col justify-center items-center gap-2"
               onSubmit={() => navigate('/site-mapeia')}>
               <img src={mapeiaLogo} alt="Logo" className="p-5" />
               <Input size="[400px]" textLabel="Email" textPlaceholder="user@gmail.com" registerText="email" type="email" />
               <Input size="[400px]" textLabel="Password" textPlaceholder="***********" registerText="password" type="password" />
               <Divider />
               <p className="text-lg text-gray-900 font-bold mb-2 cursor-pointer" onClick={() => navigate('/register')}>Register</p>
               <Button text="LOGIN" type="submit" />
            </form>
         </FormProvider>
      </Container>
   )
}