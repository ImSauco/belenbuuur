# MAPA DE NAVEGACIÓN
# Línea 10: class UserCreate
# Línea 16: class UserResponse
# Línea 25: class UserUpdate
# Línea 31: class UserLogin
# Línea 35: class UserToken

from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    email: EmailStr
    username: str
    role: str = 'user'
    password: str

class UserResponse(BaseModel):
    id: int
    email: EmailStr
    username: str
    role: str

    class Config:
        orm_mode = True

class UserUpdate(BaseModel):
    email: EmailStr | None = None
    username: str | None = None
    role: str | None = None
    password: str | None = None

class UserLogin(BaseModel):
    username: str
    password: str

class UserToken(BaseModel):
    access_token: str
    token_type: str = 'bearer'
