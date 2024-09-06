# Personal Website

This is a personal website project built with Next.js, React, and TypeScript. It features a responsive design, internationalization support, and a dark mode toggle.

## Features

- Responsive design for mobile and desktop
- Internationalization (i18n) support for English and Chinese
- Dark mode toggle
- Project showcase
- Social media links
- Photo gallery (connected to AWS S3)

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- next-intl for internationalization
- next-themes for dark mode
- AWS SDK for S3 integration
- Material-UI icons

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/Misachu10032/personal-website.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following:
   ```
   AWS_ACCESS_KEY_ID=your_aws_access_key
   AWS_SECRET_ACCESS_KEY=your_aws_secret_key
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `src/app`: Next.js app router pages
- `src/components`: React components
- `src/lib`: JSON data files
- `src/services`: Server-side services
- `messages`: Internationalization message files
- `public`: Static assets

## Deployment

This project is hosted on Vercel.

[![Deploy with Vercel](https://johnzhou.vercel.app/Home)]

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).