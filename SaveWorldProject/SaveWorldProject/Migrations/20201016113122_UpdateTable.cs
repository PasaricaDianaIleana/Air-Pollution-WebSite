using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SaveWorldProject.Migrations
{
    public partial class UpdateTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "pollutionDMaps");

            migrationBuilder.AlterColumn<float>(
                name: "Valoare",
                table: "pollutionMap2s",
                type: "real",
                nullable: false,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<float>(
                name: "Valoare",
                table: "forestMaps",
                type: "real",
                nullable: false,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<float>(
                name: "Valoare",
                table: "emissionsChart",
                type: "real",
                nullable: false,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<float>(
                name: "Valoare",
                table: "continents",
                type: "real",
                nullable: false,
                oldClrType: typeof(int));

            migrationBuilder.CreateTable(
                name: "MapsChart",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    An = table.Column<int>(type: "int", nullable: false),
                    Valoare = table.Column<float>(type: "real", nullable: false),
                    cod3 = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MapsChart", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MapsChart");

            migrationBuilder.AlterColumn<int>(
                name: "Valoare",
                table: "pollutionMap2s",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");

            migrationBuilder.AlterColumn<int>(
                name: "Valoare",
                table: "forestMaps",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");

            migrationBuilder.AlterColumn<int>(
                name: "Valoare",
                table: "emissionsChart",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");

            migrationBuilder.AlterColumn<int>(
                name: "Valoare",
                table: "continents",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");

            migrationBuilder.CreateTable(
                name: "pollutionDMaps",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    An = table.Column<int>(nullable: false),
                    Valoare = table.Column<int>(nullable: false),
                    cod3 = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_pollutionDMaps", x => x.Id);
                });
        }
    }
}
