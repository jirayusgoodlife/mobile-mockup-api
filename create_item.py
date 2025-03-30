import json
import uuid
import requests
from faker import Faker

# Set up Faker with Thai locale
fake = Faker('th_TH')

# Function to get the final resolved image URL from Picsum Photos
def get_picsum_image(width=640, height=480):
    url = f"https://picsum.photos/{width}/{height}"
    response = requests.get(url, allow_redirects=True)
    return response.url  # Get the final redirected URL

# Generate 10 items
my_item = [
    {
        "id": str(uuid.uuid4()),  # Generate a unique UUID
        "image": get_picsum_image(),  # Get the final image URL
        "title": "หัวข้อ" + fake.text(max_nb_chars=10).strip(),  # Generate a random title
        "subtitle": "เนื้อหา" + fake.paragraph(nb_sentences=5).strip(),  # Generate a random subtitle
        "date": fake.date_this_month().strftime("%Y-%m-%d"),  # Generate a random date
        "author": fake.name()  # Generate a random Thai name
    }
    for _ in range(10)
]

# Save to "my_item.json"
with open("my_item.json", "w", encoding="utf-8") as f:
    json.dump(my_item, f, ensure_ascii=False, indent=4)

print("Data saved to my_item.json")
