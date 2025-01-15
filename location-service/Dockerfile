# Use Python as the base image
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirement.txt .
RUN pip install --no-cache-dir -r requirement.txt

# Copy the rest of the application code
COPY . .

# Expose the port your Flask app is running on
EXPOSE 6000

# Command to run the Flask application
CMD ["python", "app.py"]
