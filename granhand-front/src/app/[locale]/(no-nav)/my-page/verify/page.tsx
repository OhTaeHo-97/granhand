import EmailUserVerify from "./components/email";
// import SnsUserVerify from "./components/sns";

export default function VerifyUserPage() {
    return (
        <div className="container px-6 ml-16 max-w-md w-[358px]">
            <EmailUserVerify />
            {/* <SnsUserVerify /> */}
        </div>
    )
}