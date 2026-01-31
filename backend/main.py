from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware
from . import models
from .database import engine
from .routes import auth, admin.users, admin.products

models.Bases.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins, adjust as needed
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods, adjust as needed
    allow_headers=["*"],  # Allows all headers, adjust as needed
)
app.include_router(auth.router)
app.include_router(users.router, prefix="/users", tags=["users"])
app.include_router(products.router, prefix="/products", tags=["products"])