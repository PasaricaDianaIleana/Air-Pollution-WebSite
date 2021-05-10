using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace SaveWorldProject.Migrations
{
    public partial class updateDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MemberStates",
                table: "emissionsChart");

            migrationBuilder.AddColumn<string>(
                name: "Poluant",
                table: "emissionsChart",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Source",
                table: "emissionsChart",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "evolutionChart",
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
                    table.PrimaryKey("PK_evolutionChart", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "evolutionChart");

            migrationBuilder.DropColumn(
                name: "Poluant",
                table: "emissionsChart");

            migrationBuilder.DropColumn(
                name: "Source",
                table: "emissionsChart");

            migrationBuilder.AddColumn<string>(
                name: "MemberStates",
                table: "emissionsChart",
                nullable: true);
        }
    }
}
