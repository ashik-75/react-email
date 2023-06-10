import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Tailwind,
  Text,
} from "@react-email/components";

interface EmailProps {
  name: string;
}

const Email = ({ name = "Alan" }: EmailProps) => {
  return (
    <Html lang="en">
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&family=Roboto:wght@500;700;900&display=swap",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Tailwind
        config={{
          theme: {
            extend: {
              fontFamily: {
                roboto: `'Roboto', sans-serif`,
                inter: `'Inter', sans-serif`,
              },
            },
          },
        }}
      >
        <Body className="bg-blue-100 font-inter">
          <Container
            style={{ border: "1px solid #ddd" }}
            className="max-w-xl mx-auto mt-10 bg-white rounded border p-10"
          >
            <Heading
              as="h2"
              className="font-bold italic border-b border-zinc-700 text-pink-500 text-2xl"
            >
              ZincX
            </Heading>
            <Hr className="bg-zinc-400 h-[1px]" />
            <Text className="font-roboto font-bold text-xl">
              React Email Account Verification Mail 👍
            </Text>
            <p className="text-sm">
              Hello <span className="font-bold">{name}, </span> <br /> <br />
              Complete any additional steps or security measures, such as
              setting up account recovery options or enabling two-factor
              authentication. Once you have filled in all the necessary
              information, click on the "Create" or "Sign Up" button to proceed.
            </p>
            <p className="text-sm">
              Provide any additional information that may be required, such as
              your phone number for verification purposes. Agree to the terms
              and conditions, privacy policy, and any other agreements
              presented. Complete any additional steps or security measures,
              such as setting up account recovery options or enabling two-factor
              authentication.
            </p>
            <p className="text-sm">
              You may receive a verification email or text message to confirm
              your email address. Follow the instructions provided to verify
              your account.After verification, you should be able to access your
              newly created email account by visiting the email provider's
              website and entering your email address and password .
            </p>
            <p className="text-teal-600 text-sm">
              Please Follow our Rules and Privacy policy
            </p>
            <div className="">
              <Button
                href="https://ashik-portfolio.vercel.app/"
                className="border bg-pink-700 text-sm text-white  border-zinc-400 rounded px-3 py-2 font-medium leading-4"
              >
                Verify Please
              </Button>
            </div>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default Email;
