import dotenv from 'dotenv'
dotenv.config() 
export default{
    PORT:process.env.PORT,
    DB_URL:process.env.DATABASE_URL
}