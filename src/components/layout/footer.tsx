export default function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-6 text-center text-secondary-foreground">
        <p>&copy; {new Date().getFullYear()} Green Spoon. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
