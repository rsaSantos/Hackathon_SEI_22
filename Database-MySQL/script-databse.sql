-- MySQL Script generated by MySQL Workbench
-- sáb 19 fev 2022 19:20:13
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`Ementa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Ementa` (
  `Nome` VARCHAR(45) NOT NULL,
  `Fotografia` VARCHAR(45) NULL,
  `Receita` VARCHAR(16384) NULL,
  PRIMARY KEY (`Nome`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Ingredientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Ingredientes` (
  `IDIngrediente` INT NOT NULL,
  `nomeIngrediente` VARCHAR(45) NULL,
  `Unidade` VARCHAR(45) NULL,
  PRIMARY KEY (`IDIngrediente`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`ReceitaIngrediente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`ReceitaIngrediente` (
  `nomeReceita` VARCHAR(45) NOT NULL,
  `IDIngrediente` INT NULL,
  `Quantidade` INT NULL,
  PRIMARY KEY (`nomeReceita`),
  INDEX `IDIngrediente_idx` (`IDIngrediente` ASC) VISIBLE,
  CONSTRAINT `nomeReceita`
    FOREIGN KEY (`nomeReceita`)
    REFERENCES `mydb`.`Ementa` (`Nome`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `IDIngrediente`
    FOREIGN KEY (`IDIngrediente`)
    REFERENCES `mydb`.`Ingredientes` (`IDIngrediente`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
