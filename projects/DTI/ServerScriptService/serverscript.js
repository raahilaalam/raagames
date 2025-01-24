local Players = game:GetService("Players")
local ReplicatedStorage = game:GetService("ReplicatedStorage")

local function onPlayerAdded(player)
    player.CharacterAdded:Connect(function(character)
        -- Wait until the character is fully loaded
        local humanoid = character:WaitForChild("Humanoid")

        -- Create a tool for changing outfits
        local changeOutfitTool = Instance.new("Tool")
        changeOutfitTool.Name = "ChangeOutfit"
        changeOutfitTool.RequiresHandle = false
        changeOutfitTool.Parent = player:WaitForChild("Backpack")

        -- Define change function
        changeOutfitTool.Activated:Connect(function()
            local outfits = ReplicatedStorage:WaitForChild("Outfits"):GetChildren()
            local randomOutfit = outfits[math.random(1, #outfits)]
            
            -- Apply the random outfit
            local shirtClone = randomOutfit:FindFirstChild("Shirt"):Clone()
            local pantsClone = randomOutfit:FindFirstChild("Pants"):Clone()
            shirtClone.Parent = character
            pantsClone.Parent = character

            shirtClone.ShirtTemplate = shirtClone.ShirtTemplate  -- Already set in the model
            pantsClone.PantsTemplate = pantsClone.PantsTemplate  -- Already set in the model
        end)
    end)
end

Players.PlayerAdded:Connect(onPlayerAdded)
