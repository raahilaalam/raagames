local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")

local ScoresGui = Instance.new("ScreenGui")
ScoresGui.Parent = Players.LocalPlayer:WaitForChild("PlayerGui")

local scoreDisplay = Instance.new("TextLabel")
scoreDisplay.Parent = ScoresGui
scoreDisplay.Size = UDim2.new(0, 200, 0, 50)
scoreDisplay.Position = UDim2.new(0.5, -100, 0, 10)
scoreDisplay.Text = "Score: 0"

Players.LocalPlayer.Changed:Connect(function()
    local score = Scores[Players.LocalPlayer.Name] or 0
    scoreDisplay.Text = "Score: " .. score
end)
