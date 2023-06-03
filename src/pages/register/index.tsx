import { useNavigate } from "react-router-dom";
import { Container } from "../../components/Container"
import { MyInput as Input } from "../../components/Input"
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "../../components/Button";
import mapeiaLogo from "../../assets/mapeiaLogo.png"
import { Checkbox } from "../../components/CheckBox";


type RegisterProps = {
  name: string;
  email: string;
  document: string;
  password: string;
  car: boolean;
  motorcycle: boolean
}

export const Register = () => {
  const methods = useForm<RegisterProps>();
  const navigate = useNavigate()


  return (
    <Container>
      <FormProvider {...methods}>
        <form className="w-[700px] h-auto flex flex-col justify-center items-center gap-2"
          onSubmit={() => navigate('/')}>
          <img src={mapeiaLogo} alt="Logo" className="p-5" />
          <div className="flex gap-4">
            <Input size="[200px]" textLabel="Name" textPlaceholder="User" registerText="name" type="text" />
            <Input size="[200px]" textLabel="Email" textPlaceholder="user@gmail.com" registerText="email" type="email" />
          </div>
          <div className="flex gap-4">
            <Input size="[200px]" textLabel="Password" textPlaceholder="***********" registerText="password" type="password" />
            <Input size="[200px]" textLabel="Document" textPlaceholder="xxx-xxx-xxx-xx" registerText="document" type="text" />
          </div>
          <div className="flex gap-4 mb-3">
            <Checkbox id="CAR" labelText="CAR" value="true" registerText="CAR" />
            <Checkbox id="MOTORCYCLE" labelText="MOTORCYCLE" value="true" registerText="MOTORCYCLE" />
          </div>
          <Button text="REGISTER" type="submit" />
        </form>
      </FormProvider>
    </Container>
  )
}